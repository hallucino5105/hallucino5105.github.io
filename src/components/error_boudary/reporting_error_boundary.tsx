import React from "react";
import { BaseErrorBoundary } from "./base_error_boudary";
import type { ReactNode } from "react";

export function ReportingErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <BaseErrorBoundary
      onError={(err) => console.error("report", err)}
      fallbackRender={(err) => {
        return err instanceof Error ? (
          <div>
            <div>[ReportingErrorBoundry] Error occurred!!</div>
            <div>
              {err.name}: {err.message}
            </div>
          </div>
        ) : (
          <div>
            <div>Error occurred!!</div>
            <div>{JSON.stringify(err)}</div>
          </div>
        );
      }}
    >
      {children}
    </BaseErrorBoundary>
  );
}
