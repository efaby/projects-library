module.exports = {
    projects: {
      url: process.env.PROJECTS_URL,
    },
    services: {
      auth: {
        url: process.env.SERVICES_AUTH_URL,
        clientId: process.env.SERVICES_AUTH_CLIENT_ID,
        tenant: process.env.SERVICES_AUTH_TENANT,
        unauthorizedRoute: process.env.UNAUTHORIZED_ROUTE,
      },
      logging: {
        url: process.env.SERVICES_LOG_URL,
        application: process.env.SERVICES_LOG_APP,
        environment: process.env.SERVICES_LOG_ENV,
        subTag: process.env.SERVICES_LOG_TAG,
      },
    },
  };