;(() => {
  const mobileMenu = document.querySelector("[data-menu]")
  const openMenuBtn = document.querySelector("[data-menu-open]")
  const closeMenuBtn = document.querySelector("[data-menu-close]")

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen)
    mobileMenu.classList.toggle("is-open")

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll"
    bodyScrollLock[scrollLockMethod](document.body)
  }

  openMenuBtn.addEventListener("click", toggleMenu)
  closeMenuBtn.addEventListener("click", toggleMenu)

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", e => {
    if (!e.matches) return
    mobileMenu.classList.remove("is-open")
    openMenuBtn.setAttribute("aria-expanded", false)
    bodyScrollLock.enableBodyScroll(document.body)
  })
})()

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector("[data-menu-open]"),
//     closeMenuBtn: document.querySelector("[data-menu-close]"),
//     menu: document.querySelector("[data-menu]"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle("is-open");
//   }
// })();
