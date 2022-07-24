class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setMatchStatus(bool) {
    this.hasBeenLiked = bool;
    this.hasBeenSwiped = true;
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <div class="feature-suggestion">
        
        <div class="dog-info">
          <div id="badge-img"></div>
          <h2> ${name}, ${age} </h2>
          <div class="dog-bio">${bio}</div>
        </div>
        <div class="image">
          <img class="dog-img" src="${avatar}" />
        </div>
    </div>`;
  }
}

export default Dog;
