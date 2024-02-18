export default function MainWrapper({ children }: MainWrapperProps) {
  return <main className="p-5 max-w-7xl mx-auto">{children}</main>;
}

type MainWrapperProps = {
  children: React.ReactNode;
};
