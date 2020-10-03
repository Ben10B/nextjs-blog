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