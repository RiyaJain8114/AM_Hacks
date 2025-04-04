const Budget = require("../models/Budget");
const Event = require("../models/Event");
const Society = require("../models/Society");
const Venue = require("../models/Venue");
const Approval = require("../models/Approval");
const Sponsor = require("../models/Sponsor");
const { Types } = require("mongoose");

exports.getDashboardData = async (req, res) => {
    try {
        const userId = req.user.id;
        const userObjectId = new Types.ObjectId(String(userId));

        // Fetch total income and total expense from the Budget model
        const [totalIncomeResult, totalExpenseResult, totalRequestedBudget, totalApprovedBudget] = await Promise.all([
            Budget.aggregate([
                { $match: { type: "income", requestedBy: userObjectId } },
                { $group: { _id: null, total: { $sum: "$amount" } } }
            ]),
            Budget.aggregate([
                { $match: { type: "expense", requestedBy: userObjectId } },
                { $group: { _id: null, total: { $sum: "$amount" } } }
            ]),
            Budget.aggregate([
                { $match: { requestedBy: userObjectId } },
                { $group: { _id: null, total: { $sum: "$amount" } } }
            ]),
            Budget.aggregate([
                { $match: { status: "approved" } },
                { $group: { _id: null, total: { $sum: "$amount" } } }
            ]),
        ]);

        const totalIncome = totalIncomeResult.length > 0 ? totalIncomeResult[0].total : 0;
        const totalExpense = totalExpenseResult.length > 0 ? totalExpenseResult[0].total : 0;
        const totalRequested = totalRequestedBudget.length > 0 ? totalRequestedBudget[0].total : 0;
        const totalApproved = totalApprovedBudget.length > 0 ? totalApprovedBudget[0].total : 0;

        // Calculate Net Budget Balance
        const netBalance = totalIncome - totalExpense;

        // Fetch counts in parallel
        const [totalSocieties, activeEvents, pendingApprovals, totalSponsors, venues] = await Promise.all([
            Society.countDocuments(),
            Event.countDocuments({ status: "active" }),
            Approval.countDocuments({ status: "pending" }),
            Sponsor.countDocuments(),
            Venue.find(),
        ]);

        // Fetch resource utilization
        const totalUtilization = venues.length
            ? venues.reduce((sum, venue) => sum + venue.utilization, 0) / venues.length
            : 0;

        return res.status(200).json({
            totalIncome,
            totalExpense,
            netBalance,
            totalRequestedBudget: totalRequested,
            totalApprovedBudget: totalApproved,
            totalSocieties,
            activeEvents,
            pendingApprovals,
            totalSponsors,
            resourceUtilization: `${totalUtilization.toFixed(2)}%`,
        });
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        return res.status(500).json({ message: "Server Error" });
    }
};
