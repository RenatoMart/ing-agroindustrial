import React from 'react';
import { Link } from 'react-router-dom';

interface NoticiaLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

/** Enlace interno (router) o externo (pestaña nueva) según el destino de la noticia. */
export default function NoticiaLink({ to, className, children }: NoticiaLinkProps) {
  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
