;(function() {
  angular.module('madlib', [])
  .controller('MadCtrl', function($scope) {
    $scope.title = "Automate This!";
    $scope.chunks = [
      {'type': 'text', 'text':  'Once upon a time there was a little '}, 
      {'type':'model', 'title': 'Noun'},
      {'type': 'text', 'text':  ' named '}, 
      {'type':'model', 'title': 'Proper Noun'},
      {'type': 'text', 'text':  '.  She was very '}, 
      {'type':'model', 'title': 'Adjective'},
      {'type': 'text', 'text':  ' but also somewhat '}, 
      {'type':'model', 'title': 'Adjective'},
      {'type': 'text', 'text':  '.  One day this '}, 
      {'type':'dup', 'of': 1},
      {'type': 'text', 'text':  ' went '}, 
      {'type':'model', 'title': 'Verb'},
      {'type': 'text', 'text':  'ing '}, 
      {'type':'model', 'title': 'Adverb'},
      {'type': 'text', 'text':  ' through the '}, 
      {'type':'model', 'title': 'Noun'},
      {'type': 'text', 'text':  ' to visit her '}, 
      {'type':'model', 'title': 'Adjective'},
      {'type': 'text', 'text':  ' '}, 
      {'type':'model', 'title': 'Person'},
      {'type': 'text', 'text':  '.  She had only gone '}, 
      {'type':'model', 'title': 'Number'},
      {'type': 'text', 'text':  ' miles, when she saw a '}, 
      {'type':'model', 'title': 'Noun'},
      {'type': 'text', 'text':  ' '}, 
      {'type':'model', 'title': 'Verb'},
      {'type': 'text', 'text':  'ing towards her '}, 
      {'type':'model', 'title': 'Adverb'},
      {'type': 'text', 'text':  '.'}, 
    ];

    $scope.display = function(chunk) {
      return ({
        'text': function() { return chunk.text },
        'model': function() { return content_or_placeholder(chunk) },
        'dup': 
          function() { 
            var original = $scope.chunks[chunk.of]
            return content_or_placeholder(original)
          }
      }[chunk.type]());
    }

    $scope.done = false
    $scope.error = false

    $scope.generate = function(valid) {
      if (valid) {
        $scope.error = false
        $scope.done = true
      } else {
        $scope.error = true
      }
    }

    $scope.reset = function() {
      $scope.done = false
    }

    var content_or_placeholder = function(chunk) {
      return chunk.model === "" ?
        "{{ " + chunk.title + " }}" :
        chunk.model
    }
  });
})();
