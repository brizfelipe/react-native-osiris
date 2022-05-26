import React from "react"
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from "../pages/Welcome"
import SignIn from "../pages/SignIn"

const AuthStak = createNativeStackNavigator();

export default function Routes(){
    return(
        <AuthStak.Navigator>
            <AuthStak.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown:false}}
            />

            <AuthStak.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown:false}}
            />
        </AuthStak.Navigator>
    )
};