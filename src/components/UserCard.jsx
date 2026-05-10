import React from 'react';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import { cn } from '../utils/cn';

export default function UserCard({ user }) {
  const {
    name,
    picture,
    email,
    location,
    phone,
    nat
  } = user;

  const fullName = `${name.title} ${name.first} ${name.last}`;
  const locationString = `${location.city}, ${location.country}`;

  return (
    <div className={cn(
      "group relative flex flex-col bg-dark-surface rounded-2xl overflow-hidden border border-dark-border",
      "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 hover:border-brand/30"
    )}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Header section with image */}
      <div className="relative h-24 bg-gradient-to-r from-dark-border to-dark-bg">
        <img 
          src={picture.large} 
          alt={fullName} 
          className="absolute -bottom-10 left-6 w-20 h-20 rounded-full border-4 border-dark-surface object-cover bg-dark-bg z-10"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-dark-bg/80 backdrop-blur text-xs font-semibold px-2.5 py-1 rounded-full border border-dark-border flex items-center gap-1.5 text-dark-text-muted">
          <Globe className="w-3.5 h-3.5" />
          {nat}
        </div>
      </div>

      {/* Content section */}
      <div className="pt-14 pb-6 px-6 flex-1 flex flex-col z-10">
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-1" title={fullName}>
          {fullName}
        </h3>
        
        <div className="flex flex-col gap-3 mt-4 text-sm text-dark-text-muted">
          <div className="flex items-start gap-2.5 group/item">
            <Mail className="w-4 h-4 mt-0.5 shrink-0 text-brand/70 group-hover/item:text-brand transition-colors" />
            <span className="truncate" title={email}>{email}</span>
          </div>
          
          <div className="flex items-start gap-2.5 group/item">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand/70 group-hover/item:text-brand transition-colors" />
            <span className="line-clamp-2" title={locationString}>{locationString}</span>
          </div>
          
          <div className="flex items-start gap-2.5 group/item">
            <Phone className="w-4 h-4 mt-0.5 shrink-0 text-brand/70 group-hover/item:text-brand transition-colors" />
            <span>{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
