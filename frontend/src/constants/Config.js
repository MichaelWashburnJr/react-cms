export const getGhostApi = () => process.env.GHOST_API_URL || 'http://localhost:8000';
export const getGhostApiKey = () => process.env.CONTENT_API_KEY;