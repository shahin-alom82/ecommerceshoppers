import { twMerge } from "tailwind-merge";

interface Props {
      className?: string
      children: React.ReactNode
}

const Container = ({ children, className }: Props) => {
      return (
            <div className={twMerge('max-w-screen-xl mx-auto lg:px-0 px-4', className)}>
                  {children}
            </div>
      );
};

export default Container;