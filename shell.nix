{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  name = "dev";
  buildInputs = [
    pkgs.nodejs
    pkgs.yarn
  ];
  shellHook = ''
    yarn
  '';
}
