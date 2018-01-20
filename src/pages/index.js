import React from 'react'
import Link from 'gatsby-link'
import zalgo from 'to-zalgo'

function BlogPosts(posts, { tag }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.node.frontmatter.path}>
          <Link to={post.node.frontmatter.path} style={{ padding: 10 }}>
            {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const IndexPage = ({ data }) => (
  <div>
    <h1>Unter Konstruktion</h1>
    <div>
      {/* <p>
        An manchen Tagen empfinde ich mein Dasein als überflüssig und verstehe nicht, welche
        Bedeutung mein Leben für irgendjemand, mich eingeschlossen, haben könnte. An anderen Tagen
        lache ich gerne mit anderen Menschen oder in mich hinein, freue mich über Dinge wie Wolken
        oder einen Vogel und kann nichts schlechtes in meiner Welt sehen.
      </p> */}
      {/* <p>
        Über die Dinge, die ich gerne tue, wage ich es meistens nicht zu reden, weil ich die
        seltsame Vorstellung habe, dass niemand sich für das interessiert, was mir Freude macht. Ich
        habe nach Jahren Bücher wieder für mich entdeckt, insbesondere die Geschichten von H.P.
        Lovecraft, '1984' von George Orwell und 'Schöne neue Welt' von Aldous Huxley. Aus meiner
        Jugendzeit erinnere ich mich, mit Begeisterung 'Bartimäus' von Jonathan Stroud, 'Artemis
        Fowl' von Eoin Colfer, 'Momo' von Michael Ende, 'Rumo' von Walter Moers, 'Otherland' von Tad
        Williams und viele andere sagenhafte Geschichten gelesen zu haben.
      </p>
      <p>
        Wenn es um Musik geht, meine wohl größte Leidenschaft, bin ich noch zurückhaltender. Musik
        ist für mich etwas zutiefst intimes. Und obwohl ich über die Jahre durchaus versucht habe,
        andere für die Musik, die ich höre, zu begeistern, wollte es mir nie gelingen. Vielleicht
        gab es in mir auch etwas, das genau dies nicht erlaubt hat. Für jede erdenkliche Stimmung
        suche ich die passende Musik, ob es nun Wut, Euphorie, Depression oder Trauer ist. Ob Zufall
        oder nicht, <a href="https://www.last.fm/user/inhji">mein Musikgeschmack</a> bewegt sich
        weitab von Chartlisten, aktuellen Hits und Popmusik im Allgemeinen.
      </p> */}
    </div>
    {/* <p>
      In einer Welt, die sich immer schneller dreht, versuche ich die Worte{' '}
      <strong>
        <abbr title="Sozusagen das Gegenteil von 'Live fast, die young'">Live slow, die old</abbr>
      </strong>{' '}
      zu meinem Lebensmotto zu machen.
    </p> */}
  </div>
)

export const query = graphql`
  query AllMarkdownPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD. MMMM YYYY")
            path
            tag
          }
        }
      }
    }
  }
`

export default IndexPage
