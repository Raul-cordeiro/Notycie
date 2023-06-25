import React from 'react';

const ShareButton = ({ url}) => {
  
  const handleShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    const mensangemm = "conheça nossos conteúdo viste nosso Site"
    window.open(shareUrl, '_blank');
  };

  return (
    <button className="botommc" onClick={handleShare}>
      Compartilhar no Facebook
    </button>
  );
};

export default ShareButton;
