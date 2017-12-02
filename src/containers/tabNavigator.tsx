import * as React from "react";
import { connect } from "react-redux";
import { TabNavigator, NavigationRouteConfigMap, TabNavigatorConfig, addNavigationHelpers } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { IAppState } from "../models";
import { SubRoutes } from "../routes";
import { INavigatorHostProps } from "./navigationHelpers";
import { SubScreenOneContainer } from "./subScreenOne";
import { SubScreenTwoContainer } from "./subScreenTwo";
import { SubScreenThreeContainer } from "./subScreenThree";

/**
 * Creates the tab bar configuration (three tabs)
 */
const routeConfig: NavigationRouteConfigMap = {
    [SubRoutes.One]: {
        screen: SubScreenOneContainer,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: (options: any) => (<Icon name="rocket" size={25} color={options.tintColor!} />),
        }
    },
    [SubRoutes.Two]: {
        screen: SubScreenTwoContainer,
        navigationOptions: {
            tabBarLabel: "More",
            tabBarIcon: (options: any) => (<Icon name="globe" size={25} color={options.tintColor!} />),
        }
    },
    [SubRoutes.Three]: {
        screen: SubScreenThreeContainer,
        navigationOptions: {
            tabBarLabel: "Settings",
            tabBarIcon: (options: any) => (<Icon name="cogs" size={25} color={options.tintColor!} />),
        }
    },
};

/**
 * Defines the initial route (the tab to select)
 */
const navigatorConfig: TabNavigatorConfig = {
    initialRouteName: SubRoutes.One,
};

/**
 * Tabbar navigator.
 */
const SecureNavigator = TabNavigator(routeConfig, navigatorConfig);

/**
 * Host of the tab navigator
 */
class SecureNavigatorHost extends React.Component<INavigatorHostProps> {
    constructor(props: INavigatorHostProps) {
        super(props);
    }

    public render() {
        const navigation = addNavigationHelpers({
            state: this.props.navState,
            dispatch: this.props.dispatch,
        });
        return <SecureNavigator navigation={navigation} />;
    }
}

const mapStateToProps = (state: IAppState) => ({ navState: state.secureNavigationState });
/**
 * Container of the tab navigator for a secure section in the application
 */
const SecureNavigatorContainer = connect(mapStateToProps)(SecureNavigatorHost);

export { SecureNavigatorContainer, SecureNavigator };
