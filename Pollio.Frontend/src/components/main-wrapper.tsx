export default function MainWrapper({ children }: MainWrapperProps) {
  return <main className="p-5">{children}</main>;
}

type MainWrapperProps = {
  children: React.ReactNode;
};
