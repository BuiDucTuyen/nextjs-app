import Context from "@/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Context>
        <div>{children}</div>
      </Context>
    </>
  );
}
