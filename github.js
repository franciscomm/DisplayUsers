class Github {
  constructor() {
    this.client_id = 'ea2f6220329bf053f3ba';
    this.client_secret = '1bebea52f510f48c8ceb2e6c3ec5289ae3a94319';
    this.repos_count = 5;
    this.respost_sort = 'created: asc';
  }

  //Fetch URL to Get User using async and await
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.respost_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}