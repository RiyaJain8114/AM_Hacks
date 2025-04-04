export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
    AUTH: {
        LOGIN: `/api/v1/auth/login`,
        REGISTER: `/api/v1/auth/register`,
        LOGOUT: `/api/v1/auth/logout`,
        GET_USER_INFO: `/api/v1/auth/getUser`,
    },
    DASHBOARD: {
        GET_DATA: "/api/v1/dashboard",
    },
    EVENTS: {
        CREATE: `/api/v1/events`,
        GET_ALL: `/api/v1/events`,
        GET_ONE: (eventId) => `/api/v1/events/${eventId}`,
        UPDATE: (eventId) => `/api/v1/events/${eventId}`,
        DELETE: (eventId) => `/api/v1/events/${eventId}`,
        REGISTER: (eventId) => `/api/v1/events/${eventId}/register`,
    },
    SOCIETIES: {
        CREATE: `/api/v1/societies`,
        GET_ALL: `/api/v1/societies`,
        GET_ONE: (societyId) => `/api/v1/societies/${societyId}`,
        UPDATE: (societyId) => `/api/v1/societies/${societyId}`,
        DELETE: (societyId) => `/api/v1/societies/${societyId}`,
        ADD_MEMBER: (societyId) => `/api/v1/societies/${societyId}/members`,
        REMOVE_MEMBER: (societyId, userId) => `/api/v1/societies/${societyId}/members/${userId}`,
    },
    APPROVALS: {
        CREATE: `/api/v1/approvals`,
        GET_ALL: `/api/v1/approvals`,
        GET_ONE: (approvalId) => `/api/v1/approvals/${approvalId}`,
        UPDATE: (approvalId) => `/api/v1/approvals/${approvalId}`,
    },
    BUDGET: {
        CREATE: `/api/v1/budget`,
        GET_ALL: `/api/v1/budget`,
        GET_ONE: (budgetId) => `/api/v1/budget/${budgetId}`,
        UPDATE: (budgetId) => `/api/v1/budget/${budgetId}`,
    },
    SPONSORS: {
        CREATE: `/api/v1/sponsors`,
        GET_ALL: `/api/v1/sponsors`,
        GET_ONE: (sponsorId) => `/api/v1/sponsors/${sponsorId}`,
        UPDATE: (sponsorId) => `/api/v1/sponsors/${sponsorId}`,
        DELETE: (sponsorId) => `/api/v1/sponsors/${sponsorId}`,
    },
    VENUES: {
        CREATE: `/api/v1/venues`,
        GET_ALL: `/api/v1/venues`,
        GET_ONE: (venueId) => `/api/v1/venues/${venueId}`,
        UPDATE: (venueId) => `/api/v1/venues/${venueId}`,
        DELETE: (venueId) => `/api/v1/venues/${venueId}`,
    },
};

export default API_PATHS;
