const search = document.querySelector('.search')
const btn = document. querySelector('.btn')
const input = document.querySelector('.input')
btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})

const counters = document.querySelectorAll('.counter')
counters. forEach (counter => {
    counter. innerText='0'
    const updateCounter = () => {
      const target = +counter.getAttribute ('data-target')
      const c = +counter.innerText
      const increment = target / 200
      if(c < target){
        counter.innerText=`${Math.ceil(c + increment)}`
        setTimeout(updateCounter, 1)
      }else{
        counter.innerText = target
      }
    }

updateCounter()
})

$(window).on('scroll', function() {
  
  animateNumbers();
});

function animateNumbers() {
  $('.counter').each(function() {
    if (isInView(this)) {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },
      {
        duration: 2000,
        easing: 'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    }
  });
}


// Wrap the animateNumbers() function inside a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
  function animateNumbers() {
  $('.counter').each(function() {
    if (isInView(this)) {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },
      {
        duration: 2000,
        easing: 'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    }
  });
}
  animateNumbers();
});

window.onload = function() {
  function animateNumbers() {
  $('.counter').each(function() {
    if (isInView(this)) {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },
      {
        duration: 2000,
        easing: 'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    }
  });
}
  animateNumbers();
};

setTimeout(function() {
  function animateNumbers() {
  $('.counter').each(function() {
    if (isInView(this)) {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },
      {
        duration: 2000,
        easing: 'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    }
  });
}
  animateNumbers();
}, 3000);

function isInView(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
