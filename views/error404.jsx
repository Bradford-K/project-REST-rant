const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/Dog-404.jpg" alt="Dog 404 Image"/>
                <div>
                  Photo by <a href="https://unsplash.com/@tcrock18">Tanner Crockett</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404
