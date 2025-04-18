import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Code, Terminal, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 mt-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">TheirStack Resource Center</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to get started with our product. Access documentation, API specifications, and CLI tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Documentation Card */}
        <Link href="/docs/introduction" className="block h-full">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Documentation</CardTitle>
              <CardDescription>
                Comprehensive guides and tutorials to help you learn and use our product effectively.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Getting started guides</li>
                <li>Feature documentation</li>
                <li>Tutorials and examples</li>
                <li>Troubleshooting</li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="mt-4 flex items-center text-primary text-sm font-medium">
                Browse Documentation <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </CardFooter>
          </Card>
        </Link>

        {/* OpenAPI Card */}
        <Link href="https://api.theirstack.com" target="_blank" rel="noopener noreferer" className="block h-full">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">OpenAPI Specification</CardTitle>
              <CardDescription>
                Detailed API reference documentation for developers integrating with our platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>API endpoints</li>
                <li>Request/response formats</li>
                <li>Authentication methods</li>
                <li>Interactive API explorer</li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="mt-4 flex items-center text-primary text-sm font-medium">
                Explore API Docs <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </CardFooter>
          </Card>
        </Link>

        {/* CLI Card */}
        <Link href="/docs/cli" className="block h-full">
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Command Line Interface</CardTitle>
              <CardDescription>
                Powerful CLI tools to interact with our platform directly from your terminal.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Installation guide</li>
                <li>Command reference</li>
                <li>Configuration options</li>
                <li>Automation scripts</li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="mt-4 flex items-center text-primary text-sm font-medium">
                Download CLI <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  )
}
