import React from "react"
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Dashboard from "../pages/Deshboard"

const AppStak = createNativeStackNavigator();

export default function Routes(){
    return(
        <AppStak.Navigator>
            <AppStak.Screen
                name="Deshboard"
                component={Dashboard}
                options={{headerShown:false}}
            />
        </AppStak.Navigator>
    )
};