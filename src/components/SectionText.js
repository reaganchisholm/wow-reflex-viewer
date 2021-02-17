import React from 'react';

export const SectionText = ({ children }) => {
    const icon = React.Children.map(children, child => child.type.displayName === 'Icon' ? child : null);
    const heading = React.Children.map(children, child => child.type.displayName === 'Heading' ? child : null);
    // const body = React.Children.map(children, child => child.type.displayName === 'Body' ? child : null);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                {icon &&
                    <span className="block mx-auto w-16 transform translate-y-3 text-gray-500 border border-gray-700 rounded-full p-4 mb-6">
                        { icon }
                    </span> 
                }
                <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl leading-none">
                    { heading }
                </h2>
                {/* <p className="mt-3 text-xl text-gray-400 sm:mt-4 max-w-prose mx-auto">
                    { body }
                </p> */}
            </div>
        </div>
    );
}

const Icon = ({ children }) => children;
Icon.displayName = 'Icon';
SectionText.Icon = Icon;

const Heading = ({ children }) => children;
Heading.displayName = 'Heading';
SectionText.Heading = Heading;

const Body = ({ children }) => children;
Body.displayName = 'Body';
SectionText.Body = Body;