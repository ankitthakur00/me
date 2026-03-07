import { content } from '@/app/data/content';

export function Footer() {
    return (
        <footer className="border-t border-border mt-auto">
            <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>{content.footer.copyright}</p>
                <div className="flex gap-4">
                    <a href={content.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        GitHub
                    </a>
                    <a href={content.links.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        Twitter
                    </a>
                    <a href={content.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
