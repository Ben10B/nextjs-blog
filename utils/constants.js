export const ROUTES = [
  [
    {
      name: 'hello',
      url: '/api/hello',
      method: 'get',
      description: 'returns hello',
      actions: [
        {
          label: "Expect",
          content: "[ { text: 'hello' } ]"
        }
      ]
    }
  ],
  [
    {
      name: 'notes',
      url: '/api/notes',
      method: 'get',
      description: 'returns all notes',
      actions: [
        {
          label: "Expect",
          content: "[ { text: '', description: '' } ]"
        }
      ]
    },
    {
      name: 'notes',
      url: '/api/notes',
      method: 'post',
      description: 'creates a note',
      actions: [
        {
          label: "Send",
          content: "{ text: '', description: '' }",
        }, {
          label: "Expect",
          content: "{ success: true, data: { text: '', description: '' } }"
        }
      ]
    },
    {
      name: 'notes',
      url: '/api/notes/{id}',
      method: 'get',
      description: 'returns a note',
      actions: [
        {
          label: "Send",
          content: "{}",
        }, {
          label: "Expect",
          content: "{\n text: 'hello' }"
        }
      ]
    },
    {
      name: 'notes',
      url: '/api/notes/{id}',
      method: 'put',
      description: 'edits a note',
      actions: [
        {
          label: "Send",
          content: "{}",
        }, {
          label: "Expect",
          content: "{\n text: 'hello' }"
        }
      ]
    },
    {
      name: 'notes',
      url: '/api/notes/{id}',
      method: 'delete',
      description: 'deletes a note',
      actions: [
        {
          label: "Send",
          content: "{}",
        }, {
          label: "Expect",
          content: "{\n text: 'hello' }"
        }
      ]
    }
  ]
];

export const NEXMO = {
  ERRORS: {
    NEW_USER: "To add images, type your name as follows:\n\nName.Morgan"
  },
  SUCCESS: {
    NEW_USER: "New user created successfully!\nSend your funny images and gifs!",
    EDIT_USER: "User edited successfully!",
    IMAGE_UPLOADED: 'Image uploaded successfully!'
  },
  HELP: {
    HEADER: '- - - - - - - - - - - - - - - - - HELP - - - - - - - - - - - - - - - - -',
    NAME: 'To add user or edit name, type: Name.Morgan',
    IMG: 'Some images may be too big to send. Aw well...',
    TYPE: "Type any character for details."
  }
}