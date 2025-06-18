type QueryStateHandlerProps = {
  isLoading: boolean;
  error: unknown;
  children: React.ReactNode;
};

export default function QueryStateHandler({
  isLoading,
  error,
  children,
}: QueryStateHandlerProps) {
  if (error) {
    return (
      <div className="h-96 flex items-center justify-center text-red-700">
        Error loading data
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-96 flex items-center justify-center text-custom-orange-500">
        Loading data...
      </div>
    );
  }

  return <>{children}</>;
}
