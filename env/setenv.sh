#!/bin/sh

## DO NOT USE THESE DEFAULT VALUES
## BEST PRACTICE IS USE SECRETS TO SET ENV PARAMS WITH YOUR CI 
## PROVIDER AND CONTAINER ORCHESTRATION (I.E. KUBERNETES) SYSTEMS

echo "Creating .env file ..."
tee -a .env << END
API_BASE_URL=http://localhost:3000
PORT=3000
JWT_SECRET=secret
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=noice_db
REDIS_HOST=localhost
REDIS_PORT=6379
SENDGRID_API_KEY=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
ES_HOST=http://localhost:9200
ES_LOG_LEVEL=info
END

echo "Creating docker.env file..."
tee -a docker.env << END
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=noice_db
PGADMIN_DEFAULT_EMAIL=test@example.com
PGADMIN_DEFAULT_PASSWORD=admin1234
END

echo "Done creating env configs"