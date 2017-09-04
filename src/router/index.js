import { StackNavigator } from 'react-navigation'

import Test from './../components/test/index'

class routerPath {

    static getRouter(routerName, screen, tabBarOptions = {}) {

        const MyApp = StackNavigator({
            Home: {
                screen: Test,
            },
            routerName: {
                screen: screen,
            }
        },
        {
            tabBarOptions: tabBarOptions
        });
        return MyApp;
    }   
}

export default routerPath
