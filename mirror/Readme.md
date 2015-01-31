Google API mirror tools
=================

Rakefile and libraries.txt originally from 
https://github.com/rmm5t/googleapis-mirror


Nginx config
=================

<code>

        location /googleapis/ {
                root /var/www/;
                #post_action @api_cachemiss;
                try_files $uri @api_cachemiss;
        }

        location @api_cachemiss {
                internal;
                proxy_pass http://localhost:8033;
                proxy_store        /var/www$uri;
                proxy_set_header  Host              $host;
                proxy_set_header  X-Real-IP          $remote_addr;
                proxy_set_header  X-Forwarded-For    $proxy_add_x_forwarded_for;
                proxy_set_header  X_Forwarded_Proto  $scheme;

        }

</code>

Traffic Encryption
=================

It is recommended to encrypt *.{js,css} traffic to mirror googleapis in 
China. tsocks + autossh can be use.

<code>
autossh -f -N -D 127.0.0.1:7070 -p 3843 USER@IP_OUTSIDE_GFW
</code>

You can also encrypt your traffic with shadowsocks or, without any
encryption. Just modify nginx @api_cachemiss config to fit you need.

Mirror Server
=================
Mirror server download and cache javascript libraries on ajax.googleapis.com
automatically.

If you use tsocks:

<code>
tsocks ruby ./mirror_server.rb
</code>

