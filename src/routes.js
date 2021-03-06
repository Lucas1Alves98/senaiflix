import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppTab = createBottomTabNavigator();

import Cursos from "./pages/Cursos";
import Disciplinas from "./pages/Disciplinas";
import Logica from "./pages/Desenvolvimento/logica";
import Desenvolvimento1 from "./pages/Desenvolvimento/desenvolvimento1";
import DesenvolvimentoMobile from "./pages/Desenvolvimento/desenvolvimentoMobile";
import FundamentosWeb from "./pages/Desenvolvimento/fundamentosWeb";
import Desenvolvimento2 from "./pages/Desenvolvimento/desenvolvimento2";


export default function Routes() {
  return (
    <NavigationContainer>
      <AppTab.Navigator screenOptions={{ headerShown: false }}>
        <AppTab.Screen name="Cursos" component={Cursos} />
        <AppTab.Screen name="Disciplinas" component={Disciplinas} />
        <AppTab.Screen name="Logica" component={Logica} />
        <AppTab.Screen name="Desenvolvimento1" component={Desenvolvimento1}/>
        <AppTab.Screen name="DesenvolvimentoMobile" component={DesenvolvimentoMobile}/>
        <AppTab.Screen name="FundamentosWeb" component={FundamentosWeb}/>
        <AppTab.Screen name="Desenvolvimento2" component={Desenvolvimento2}/>
      </AppTab.Navigator>
    </NavigationContainer>
  );
}
