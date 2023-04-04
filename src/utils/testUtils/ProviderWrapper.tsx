import { Provider } from "react-redux";
import { store } from "../../store/store";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const ProviderWrapper = ({ children }: ProviderWrapperProps) => (
  <Provider store={store}>{children}</Provider>
);

export default ProviderWrapper;
