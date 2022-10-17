import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import 
{ FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaTwitter, 
  FaLinkedin
} from 'react-icons/fa'
import { 
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper, 
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink 
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre nós</FooterLinkTitle>
                <FooterLink to="/">Como funciona</FooterLink>
                <FooterLink to="/">Depoimentos</FooterLink>
                <FooterLink to="/">Carreiras</FooterLink>
                <FooterLink to="/">Investidores</FooterLink>
                <FooterLink to="/">Termos de serviço</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Entre em contato</FooterLinkTitle>
                <FooterLink to="/">Contato</FooterLink>
                <FooterLink to="/">Suporte</FooterLink>
                <FooterLink to="/">Destinos</FooterLink>
                <FooterLink to="/">Patrocínios</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Vídeos</FooterLinkTitle>
                <FooterLink to="/">Envie vídeos</FooterLink>
                <FooterLink to="/">Embaixadores</FooterLink>
                <FooterLink to="/">Agência</FooterLink>
                <FooterLink to="/">Influenciadores</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Redes sociais</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              grana
            </SocialLogo>
            <WebsiteRights>grana © {new Date().getFullYear()} Todos os direitos reservados.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="//www.twitter;com/grana" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;