# Cortex Agents with Row Access Policies and React

This repo shows an example React application of how to use Cortex Agents with multi-tenant data. We use
Row Access Policies (RAP) based on a session variable to only show the appropriate data to the application
user based on their access as defined in an entitlement table.

There is a Snowflake Notebook (`.ipynb`) file you can import into Snowflake to walk through the steps.

## Setup
This example builds off of the [Getting Started with Cortex Agents](https://quickstarts.snowflake.com/guide/getting_started_with_cortex_agents/index.html) Quickstart.

You only need to follow steps 1 and 2 for this example.

### Notebook
Included in this repository is a Snowflake Notebook file, `CORTEXAGENT_RAP.ipynb`. In Snowflake, import this 
file as a new Notebook and run through the steps in it. At the end you will have a set of environment
variables that you will use to configure the application.

## Application
We recommend using Node version 20 for this application. 

1. Use `npm` to install `pnpm`. From the command-line run:
```
npm i -g pnpm
```

2. Use `pnpm` to install the dependencies. From the command-line run:
```
pnpm i
```

3. Set the environment variables. Copy and paste the environment variable command at the end
of the Notebook. It should look something like the following. Run it from the command-line:
```
export NEXT_PUBLIC_SNOWFLAKE_URL="https://<ACCOUNT LOCATOR>.snowflakecomputing.com"
export NEXT_PUBLIC_SEMANTIC_MODEL_PATH="@SALES_INTELLIGENCE.DATA.MODELS/sales_metrics_model.yaml"
export NEXT_PUBLIC_SEARCH_SERVICE_PATH="SALES_INTELLIGENCE.DATA.SALES_CONVERSATION_SEARCH"
export NEXT_PUBLIC_SNOWFLAKE_PAT="<PROGRAMMATIC ACCESS TOKEN>"
```

Also set the warehouse to use for the queries:
```
export NEXT_PUBLIC_SNOWFLAKE_WAREHOUSE="<WAREHOUSE NAME>"
```

4. Use `pnpm` to start the application. From the command-line run:
```
pnpm dev
```

5. Log in and use the application. There are 6 users in the application. In all cases
the user's password is the user's username (for simplicity):
* `James`, who has access to the data for `James`
* `Mike`, who has access to the data for `Mike`
* `Rachel`, who has access to the data for `Rachel`
* `Sarah`, who has access to the data for `Sarah`
* `Alice`, who has access to the data for `Rachel` and `Sarah`
* `Bob`, who has access to the data for `James` and `Mike`

Try logging out and logging in as a different user and asking the same question to see how the answer changes.
* `What are the biggest deals won and lost?`

Try logging out and logging in as a different user and asking the same question to see how the answer changes.
