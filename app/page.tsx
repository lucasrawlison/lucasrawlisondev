import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="p-3 min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-6">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lucas Rawlison</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="#sobre">Sobre</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#projetos">Projetos</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#contato">Contato</a>
            </Button>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto">
          <Image
            src="https://github.com/lucasrawlison.png"
            alt="Lucas Rawlison"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8"
          />
          <h2 className="text-4xl font-bold mb-4">
            Olá, eu sou Lucas Rawlison
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Desenvolvedor de Software
          </p>
          <Button asChild>
            <a href="#contato">Entre em contato</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Um entusiasta de tecnologia em uma jornada como desenvolvedor de
            software. Com interesse em linguagens como HTML, JavaScript e PHP,
            além de ferramentas como React, Next.js e SQL, me dedico a aprender
            e dominar práticas modernas de desenvolvimento. Apaixonado por
            resolver problemas e criar soluções criativas. O limite do homem é a
            sua capacidade de inovar.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto 1 */}
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Imagem do Projeto 1"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Calculadora em Next.js</CardTitle>
                <CardDescription>
                  Este é um projeto de uma calculadora simples construída
                  utilizando React e Next.js. A interface do usuário é composta
                  por componentes fornecidos por uma biblioteca externa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  JavaScript, TypeSript, CSS, Next.js
                </p>
                <div className="w-full flex justify-between">

                <Button variant="outline" asChild>
                  <a href="https://next-calculator-mauve.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Ver no GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://next-calculator-mauve.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Acessar Projeto
                  </a>
                </Button>
                </div>

              </CardContent>
            </Card>
            {/* Projeto 2 */}
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Imagem do Projeto 1"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Projeto 1</CardTitle>
                <CardDescription>Breve descrição do projeto</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Detalhes do projeto, tecnologias usadas, etc.
                </p>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Ver Projeto
                  </a>
                </Button>
              </CardContent>
            </Card>
            {/* Projeto 3 */}
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Imagem do Projeto 1"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Projeto 1</CardTitle>
                <CardDescription>Breve descrição do projeto</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Detalhes do projeto, tecnologias usadas, etc.
                </p>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Ver Projeto
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://linkedin.com/in/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:luc1497@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a target="_blank" href="http://wa.me/5583987872668">
                <Phone className="h-6 w-6" />
                <span className="sr-only">Telefone</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p>&copy; 2025 Lucas Rawlison. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

