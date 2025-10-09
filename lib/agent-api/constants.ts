
export const CORTEX_ANALYST_TOOL = {
    "tool_spec": {
        "type": "cortex_analyst_text_to_sql",
        "description": "This tool is used to query items and orders data for restaurants.",
        "name": "analyst1"
    }
} as const;

export const CORTEX_SEARCH_TOOL = {
    "tool_spec": {
        "type": "cortex_search",
        "description": "Tool to identify items by their descriptions. Use this tool when users ask about items by their description or title to determine which items specifically are applicable, and use the relevant items specifically when querying via SQL.",
        "name": "search1"
    }
} as const;

export const SQL_EXEC_TOOL = {
    "tool_spec": {
        "type": "sql_exec",
        "name": "sql_exec"
    }
} as const;

export const DATA_TO_CHART_TOOL = {
    "tool_spec": {
        "type": "data_to_chart",
        "name": "data_to_chart"
    }
} as const;

export const RELATED_QUERIES_REGEX = /Related query:\s*(.*?)\s*Answer:\s*(.*?)(?=\nRelated query:|\n*$)/gs;