export function getLabels(optionLang) {
    const labels = optionLang ? {
        title: 'Title',
        homeH1: 'Virtual Bookshelf',
        category: 'Category',
        details: 'Details',
        description: 'Description',
        comments: 'Comments',
        addNewBook: 'Add new book',
        editBook: 'Edit Book',
        deleteBook: 'Delete Book'
    } : {
            title: 'Título',
            homeH1: 'Estante Virtual de Livros',
            category: 'Categoria',
            details: 'Detalhes',
            description: 'Descrição',
            comments: 'Comentários',
            addNewBook: 'Adicionar Novo Livro',
            editBook: 'Editar Livro',
            deleteBook: 'Deletar Livro'    
        }
    return labels
}