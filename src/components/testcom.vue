<script>
  export default {
    props: [ 'evel' ],
    render: function (createElement) {
      return createElement(
        'h1',
        {
          style: {
            color: 'white'
          }
        },
        [
          createElement(
            'a',
            {
              attrs: {
                href: '#'
              },
              style: {
                color: '#fff'
              }
            },
            'sssss'
          )
        ]
      )
    }
  }
</script>