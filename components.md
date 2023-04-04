# Data layer

## Data

- PostsContext
  - Post:
    - title: string
    - userId: string
    - body: string
- UiContext
  - isLoading: boolean
  - modal
    - isError: boolean
    - isOpen: boolean
    - text: string

## Receive interactions

- PostsContext
  - deletePost: Remove post from posts list
- UiContext:
  - openModal: Set isOpen property to true
  - closeModal: Set isOpen property to false

# Components

## PostCard

### Show data

- Heading level 2 with the received post title
- Paragraph with the received post body
- Span with the received user name
- Button with 'delete' text

### Receive interactions

- Delete the post on click

## PostCardList

### Show data

- A PostCard por each received post

## Button

### Show data

- The received text

### Receive interactions

- Call the received action on click

## Modal

### Show data

- Span with the received message

### Receive interactions

- Close modal on click

## HomePage

### Show data

- A PostCardList component
