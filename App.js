import Navigation, { BottomTab, DrawerNav } from "./navigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
}
