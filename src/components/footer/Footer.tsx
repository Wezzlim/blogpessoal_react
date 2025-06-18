import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"


function Footer() {
  return (
    <div className="
        bg-gray-100
        py-6
        text-center">
        <p className="
        text-sm
        text-gray-600">
        © 2025 Feito por Wesley Lima, Todos os direitos reservados.
        </p>
        <div className="
            flex 
            justify-center 
            gap-6 mt-4">
            {/* <a 
                href=""
                target=""
                rel=""
                className=""
            >
            </a> */}
            <LinkedinLogo size={32} color="#01398e" />
            <GithubLogo size={32} color="#01398e" />
            <InstagramLogo size={32} color="#01398e" />
        </div>
    </div>
  )
}

export default Footer