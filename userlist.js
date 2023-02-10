class UsersList extends HTMLElement {
  url = "https://jsonplaceholder.typicode.com/users";
  users = [];
  searchText = "";
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
      }    
  
      .container {
          display: block;
          border: 1px solid black;
          border-radius: 8px;
          padding: 16px;
          margin: 16px 0;
      }
  
      #search {
          padding: 8px;
          display: block;
          width: 100%
      }
  
      .users {
          padding: 8px;
  
      }
  
      .user {
          padding: 8px;
          list-style: none;
      }
      .user:hover{
        background: aliceblue;
      }
  
  </style>
              <div class="container">
              <input id="search" type="text" placeholder="Search user"  />
  
              <ul class="users">
  
              </ul>
          </div>
      `;
  }
  connectedCallback() {
    fetch(this.url)
      .then((res) => res.json())
      .then((users) => {
        this.users = users;
        this.renderUserList();
      });

    const searchInput = this.shadowRoot.getElementById("search");
    searchInput.addEventListener("input", (e) => {
      this.searchText = e.target.value;
      this.renderUserList();
    });
  }

  renderUserList() {
    const filteredUsers = this.users.filter(({ name }) =>
      name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    const usersList = filteredUsers.map((user) => {
      const listEl = document.createElement("li");
      listEl.classList.add("user");
      listEl.textContent = `#${user.id} - ${user.name}`;
      return listEl;
    });
    this.shadowRoot.querySelector(".users").replaceChildren(...usersList);
  }

  //   attribute change detection
  static get observedAttributes() {
    return ["data-background"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "data-background" && oldValue !== newValue) {
      const usersEl = this.shadowRoot.querySelector(".users");
      usersEl.style.background = newValue;
    }
  }
}

customElements.define("users-list", UsersList);
