const MENU_DATA = {

  breakfast: [
    {
      name:  'Avocado Toast',
      price: 'R89',
      desc:  'Sourdough, smashed avo, chilli flakes, micro herbs, poached egg.',
      badge: "Chef's Pick",
    },
    {
      name:  'Granola Bowl',
      price: 'R72',
      desc:  'House-made granola, coconut yoghurt, seasonal fruit compote, honey.',
      badge: null,
    },
    {
      name:  'Eggs Benedict',
      price: 'R95',
      desc:  'Free-range eggs, wilted spinach, crispy bacon, hollandaise on brioche muffin.',
      badge: 'Fan Favourite',
    },
    {
      name:  'Banana Bread',
      price: 'R48',
      desc:  'Warm slice with whipped cinnamon butter. Add a double espresso.',
      badge: null,
    },
    {
      name:  'Shakshuka',
      price: 'R88',
      desc:  'Spiced tomato sauce, two free-range eggs, feta, crusty sourdough.',
      badge: 'Plant-Based',
    },
    {
      name:  'French Toast',
      price: 'R82',
      desc:  'Brioche, mixed berry coulis, crème fraîche, candied walnuts.',
      badge: null,
    },
  ],

  lunch: [
    {
      name:  'Garden Grain Bowl',
      price: 'R96',
      desc:  'Farro, roasted beetroot, pickled cucumber, tahini dressing, seeds.',
      badge: 'Vegan',
    },
    {
      name:  'Croque Monsieur',
      price: 'R88',
      desc:  'Gruyère, ham, Dijon béchamel on sourdough with dressed side salad.',
      badge: null,
    },
    {
      name:  'Haloumi Wrap',
      price: 'R92',
      desc:  'Grilled haloumi, roasted peppers, harissa yoghurt, rocket, flatbread.',
      badge: 'Vegetarian',
    },
    {
      name:  'Chicken Sandwich',
      price: 'R98',
      desc:  'Crispy thigh, pickled slaw, smoked mayo, milk bun.',
      badge: "Chef's Pick",
    },
    {
      name:  'Soup of the Day',
      price: 'R62',
      desc:  'Ask your server — always seasonal, always made from scratch.',
      badge: null,
    },
    {
      name:  'Charcuterie Plate',
      price: 'R115',
      desc:  'Cured meats, artisan cheese, cornichons, seeded crackers, fig jam.',
      badge: 'To Share',
    },
  ],

  drinks: [
    {
      name:  'Flat White',
      price: 'R38',
      desc:  'Double ristretto, silky micro-foam. Our flagship drink.',
      badge: 'House Fav',
    },
    {
      name:  'Pour Over',
      price: 'R45',
      desc:  'Single-origin filter, rotated weekly. Ask what\'s on the bar.',
      badge: null,
    },
    {
      name:  'Cold Brew',
      price: 'R42',
      desc:  '12-hour cold steep, served over ice. Black or with oat milk.',
      badge: null,
    },
    {
      name:  'Turmeric Latte',
      price: 'R48',
      desc:  'Coconut milk, turmeric, ginger, black pepper, honey.',
      badge: 'Caffeine-Free',
    },
    {
      name:  'Fresh Juice',
      price: 'R55',
      desc:  'Cold-pressed daily — apple & ginger, or carrot & orange.',
      badge: null,
    },
    {
      name:  'Sparkling Lemonade',
      price: 'R38',
      desc:  'House-made, fresh lemon, elderflower, soda water.',
      badge: 'Fan Favourite',
    },
  ],

};


/**
 * Creates a single menu item card element.
 * @param {Object} item - A menu item from MENU_DATA
 * @returns {HTMLElement} - A fully built menu item div
 */
function createMenuCard(item) {
  const card = document.createElement('div');
  card.className = 'menu-item';

  card.innerHTML = `
    <div class="menu-item-header">
      <span class="menu-item-name">${item.name}</span>
      <span class="menu-item-price">${item.price}</span>
    </div>
    <p class="menu-item-desc">${item.desc}</p>
    ${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}
  `;

  return card;
}

/**
 * Clears the menu grid and renders a new category.
 * @param {string} category - 'breakfast', 'lunch', or 'drinks'
 */
function renderMenuCategory(category) {
  const grid = document.getElementById('menu-grid');

  
  grid.innerHTML = '';

  
  const items = MENU_DATA[category];

  items.forEach(function(item) {
    const card = createMenuCard(item);
    grid.appendChild(card);
  });
}

function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu-tab');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {

      tabs.forEach(function(t) { t.classList.remove('active'); });

      tab.classList.add('active');

      const category = tab.getAttribute('data-category');
      renderMenuCategory(category);
    });
  });
}


function initScrollReveal() {
  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 } 
  );

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(function(el) {
    observer.observe(el);
  });
}


document.addEventListener('DOMContentLoaded', function() {

  renderMenuCategory('breakfast');

  initMenuTabs();

  initScrollReveal();

});