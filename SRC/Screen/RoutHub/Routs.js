export const navigateTo = (navigation, screenName) => {
    navigation.navigate(screenName);
  };


export const resetTo = (navigation, screenName, params = {}) => {
navigation.reset({
    index: 0,
    routes: [{ name: screenName, params }],
});
};

export const navigateWithParams = (navigation, screenName, params) => {
    navigation.navigate(screenName, params);
  };

export const replaceScreen = (navigation, screenName, params = {}) => {
    navigation.replace(screenName, params);
  };

export const popToTop = (navigation) => {
    navigation.popToTop();
  };

  export const goBack = (navigation) => {
    navigation.goBack();
  };




