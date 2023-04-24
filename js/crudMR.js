console.log('------ CRUD BÁSICO EM JS ------');
console.log('Mini Reddit - Usuários e posts ');

const minireddit = {
    user: [
        {
            username: 'ryan',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'ryan',
            content: 'Meu primeiro post'
        }
    ],
};

// CREATE

function createPost(dados) {
    minireddit.posts.push({
        id: minireddit.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
createPost({ owner: 'ryan', content: 'Segundo post' }); 
createPost({ owner: 'ryan', content: 'Terceiro post' }); 
console.log(minireddit.posts);

// READ

function catchPosts() {
    return minireddit.posts;
}

// UPDATE

function updateContentDoPost(id, newContent) {
    const postUpdate = catchPosts().find((post) => {
        return post.id === id;
    });
    
    postUpdate.content = newContent;
    console.log(postUpdate)
}
updateContentDoPost(1, 'Novo conteúdo do post')
console.log(catchPosts());

// DELETE

function deletePost(id) {
    const listPostsUpdate = catchPosts().filter((postCurrent) => {
        return postCurrent.id !== id;
    })
    minireddit.posts = listPostsUpdate;
}
deletePost(1);
deletePost(2);
deletePost(3);

console.log(catchPosts());
console.log('-------------------------------');