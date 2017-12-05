# Tabbed Navigation with Redux

The idea fulling this exercise is to determine how navigation works (properly) with redux.

So far I have studied how to use a `TabNavigator` and a `StackNavigator`

- How could we combine these in a single application?

Trying to get two navigators (one on top of the other) was a bit challenging as I need to actively past the navigator to the child container if I want to trigger a specific before from the child to the parent. This exercise will be illustrating that scenario if my application has a log-in functionality and a log-out functionality exposed on one of the screens.

- What benefits will I get going down this path?

I guess the benefit will be do dettach components and container from the navigation property. Making my code more composable and less dependent on external libraries (obvious, super dependent on redux)

## By now, I have grown used to do...

The standard configuration (depends on some libraries) of a project can be replicated as follows:

```sh
# creating the project.
$ react-native init <projectname>
# getting ready to do more work in the project (configuration)
$ cd <projectname>
# adding typescript locally, making the project portable.
$ yarn add typescript -dev
# creating the typescript project configuration. Once this step is done, I also edit the tsconfig.json file to
# add the "include": [ "./src/" ] section after the configuration.
$ ./node_modules/.bin/tsc --init --pretty --target es2017 --jsx react --sourceMap --module commonjs --outdir ./lib/
# creating the source folder
$ mkdir src
# adding type definitions required to compile typescript files
$ yarn add @types/react @types/react-native
# adding navigation and its type definition
$ yarn add react-navigation @types/react-navigation
# adding redux for react and its type definition...
# notice I am not leaving @types/redux out by mistake. 'redux' includes
# its type definition by default (awesome libraries do this by default ☺️ )
$ yarn add redux react-redux @types/react-redux
# adding vector graphics.
$ yarn add react-native-vector-icons @types/react-native-vector-icons
# hooking up the fonts and the configuration for iOS and Android
$ react-native link
# removing files that I do not need
$ rm -rf .flowconfig App.js index.js
# creating some required files
$ touch ./src/index.tsx
$ echo 'import "./lib";' > index.js
```

## How to run this code?

```sh
# Cloning the repo to 'tabnav'
git clone git@github.com:rodrigoelp/reactnative-typescript-exercise-13.git navredux
# Changing directory
cd navredux
# Installing dependencies
yarn # if you have not installed yarn, then change it to: npm install
# Compiling the typescript code
./node_modules/.bin/tsc
# Launching the react-native development server
open -a Terminal "`react-native start`"
# Compiling the code for ios and deploying it to the simulator
react-native run-ios # optionally, type: react-native run-android
# Alternatively, you could comment the line above and run the two lines below.
# open -a Terminal "`react-native run-ios`"
# open -a Terminal "`react-native run-android`"
```
