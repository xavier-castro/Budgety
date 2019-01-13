// BUDGET CONTROLLER
const budgetController = (() => {})();

// UI CONTROLLER
const UIController = (() => {
  const DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'
  };

  return {
    getInput() {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },

    getDOMStrings() {
      return DOMStrings;
    }
  };
})();

// GLOBAL APP CONTROLLER
const controller = ((budgetCtrl, UICtrl) => {
  const ctrlAddItem = () => {
    // 1. Get the field input data
    const input = UICtrl.getInput();
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget
  };

  const setupEventListeners = () => {
    const DOM = UICtrl.getDOMStrings();
    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', e => {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init() {
      console.log('Application has started');
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
