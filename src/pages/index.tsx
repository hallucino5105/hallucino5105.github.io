import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReportingErrorBoundary } from "@/components/error_boudary/reporting_error_boundary";
import config from "@/root/config";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      //suspense: true,
    },
    mutations: {
      retry: false,
    },
  },
});

export default function Index() {
  return (
    <ReportingErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <IndexBody />
        {!config.api.debug.enable ? null : <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </ReportingErrorBoundary>
  );
}

function IndexBody() {
  return (
    <main className="text-sm p-2">
      <div>Next.js project sample page</div>
    </main>
  );
}

