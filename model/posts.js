// model/posts.js
module.exports = {
    posts: [
        {
            id: "dsdasdad",
            title: "Teste Mural",
            description: "descrição teste"
        }
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description });
    },

    delPost(id) {
        this.posts = this.posts.filter(post => post.id !== id);
    }
};

function generateID() {
    return Math.random().toString(36).substring(2, 9);
}
