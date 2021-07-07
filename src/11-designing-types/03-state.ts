// используйте допустимые состояния

interface PageState {
    pageText: string
    isLoading: boolean
    error?: string
}


function renderPage(state: PageState) {
    if (state.error) {
        return `Error -> ${state.error}`
    }

    if (state.isLoading) {
       return 'Loading...'
    }

    return `${state.pageText}`
}

function gerUrlForPage(newPage: string) {
    return newPage + 'foo'
}

async function changePage(state: PageState, newPage: string) {
    state.isLoading = true

    try {
        const response = await fetch(gerUrlForPage(newPage))
        state.pageText = await response.text()
        state.isLoading = false
    } catch(e) {
        state.error = '' + e
        // state.loading?
    }
}
// Состояние одновременно содержит недостаток информации
// (неясно какой запрос провалился, а какой загружается)

// Тип State позволяет срабатывать и isLoading и Error

// Если пользователь повторно изменит страницы в процессе загрузки,
// то неизвестно чем это обернется. Либо он сперва увидит новую страницу, а затем ошибку
// либо первую страницу вместо второй


interface RequestPending {
    state: 'pending'
}

interface RequestError {
    state: 'error'
    error: string
}

interface RequestSuccess {
    state: 'ok'
    pageText: string
}

type RequestState = RequestPending | RequestError | RequestSuccess

interface State {
    currentPage: string
    requests: { [page: string]: RequestState }
}

function render(state: State) {
    const { currentPage } = state
    const requestState = state.requests[currentPage];

    switch(requestState.state) {
        case 'pending':
            return `Loading ${currentPage}`
        case 'error':
            return 'Error'
        case 'ok':
            return `<h1>${requestState.pageText}</h1>`
    }
}

async function change(state: State, newPage: string) {
    state.requests[newPage] = { state: 'pending' }
    state.currentPage = newPage
    try {
        const response = await fetch(gerUrlForPage(newPage))
        const pageText = await response.text()
        state.requests[newPage] = { state: 'ok' , pageText }
    } catch(e) {
        state.requests[newPage] = { state: 'error', error: '' + e }
    }
}
