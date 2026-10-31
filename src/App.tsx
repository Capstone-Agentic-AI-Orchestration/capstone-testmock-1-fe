export interface AppProps {
  title?: string;
}

export function App({ title = 'capstone-testmock-1-fe' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}
